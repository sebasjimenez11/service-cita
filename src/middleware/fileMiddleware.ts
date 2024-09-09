import { Request, Response, NextFunction } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import { uploadMultiple } from './multerConfig'; // Middleware para multer
import { uploadImagesToAzure } from '../helpers/azureBlobService'; // Función para subir imágenes a Azure

const fileUploadMiddleware = (validators?: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        uploadMultiple(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: 'Error subiendo los archivos: ' + err.message });
            }

            if (validators) {
                await Promise.all(validators.map(validator => validator.run(req)));
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
            }

            try {
                if (!req.files || (Array.isArray(req.files) && req.files.length === 0)) {
                    return res.status(400).json({ message: 'No se han subido archivos' });
                }

                const files = req.files as Express.Multer.File[];
                const urls = await uploadImagesToAzure(files);

                req.body.fileUrls = urls;

                if (validators) {
                    await Promise.all(validators.map(validator => validator.run(req)));
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                    }
                }

                next();
            } catch (uploadError) {
                return res.status(500).json({ error: 'Error al procesar archivos' });
            }
        });
    };
};

export default fileUploadMiddleware;
