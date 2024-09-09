import multer from 'multer';

// Configuración de almacenamiento en memoria
const storage = multer.memoryStorage();

// Configuración de multer para múltiples archivos
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/; // Tipos de archivos permitidos
        const extname = allowedTypes.test(file.originalname.toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Tipo de archivo no permitido'));
        }
    }
});

// Exporta el middleware configurado para subir múltiples archivos
export const uploadMultiple = upload.array('files', 10); // Hasta 10 archivos permitidos en la subida
