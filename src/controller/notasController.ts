import { Request, Response } from "express";
import NotaMedicaDto from "../Dto/notas/notasDto";
import notasService from "../service/notasService";

export default class controllerNotas {
        private notaMedica = new NotaMedicaDto();
        private service = new notasService();

        createNotas = async (req: Request, res: Response) => {
            this.notaMedica.descripcion = req.body.descripcion;
            this.notaMedica.fkCodigoCita = req.body.fkCodigoCita;

            const create = this.service.createNotas(this.notaMedica);
        }

        getNotasMedicas = async (req: Request, res: Response) => {
            const codigoCita = req.params.codigoCita;
            const IdPaciente = req.params.IdPaciente;
            const IdDoctor = req.body.ID;

            const getByIdMedico = await this.service.getNotasByIdDoctor(codigoCita, IdPaciente, IdDoctor)
            res.status(202).json({
                notas: getByIdMedico
            })
        }

        getNotasByPatient = async (req: Request, res : Response) => {
            const IdPaciente = req.body.ID;
            const getByIdPaciente = this.service.getNotasByIdPaciente(IdPaciente);
        }
}