import { Request, Response } from "express";
import RecetaDto from "../Dto/medicamentos/medicamentosDto";
import medicamentosService from "../service/medicamentosService";

export default class controllerMedicamentos {
    private receta = new RecetaDto();
    private service = new medicamentosService();

    createMedicamento = async (req: Request, res: Response) => {
        try {
            this.receta.descripcionMed = req.body.descripcionMed;
            this.receta.fechaFin = req.body.fechaFin;
            this.receta.fechaInicio = req.body.fechaInicio;
            this.receta.horaInicio = req.body.horaInicio;
            this.receta.intervalo = req.body.intervalo;
            this.receta.medicamentoNom = req.body.medicamentoNom;
            this.receta.fkCodigoCita = req.body.fkCodigoCita;

            const create = await this.service.createMedicamento(this.receta);

            if (create.create) {
                res.status(202).json({
                    message: create.message
                });
            } else {
                res.status(404).json({
                    message: create.message
                });
            }

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    getMedicamentos = async (req: Request, res: Response) => {
        try {
            const codigoCita = req.params.codigoCita;
            const IdDoctor = req.body.ID;
            const IdPaciente = req.params.IdPaciente;

            const getMedicamento = await this.service.getMedicamentos(codigoCita, IdPaciente, IdDoctor);

            res.status(200).json({ recetas: getMedicamento });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    updateStatus = async (req: Request, res: Response) => {
        try {
            const estado = req.body.estado;
            const codigoReceta = req.body.codigoReceta;
            const update = await this.service.updateStauts(estado, codigoReceta);

            if (update.update) {
                res.status(202).json({ message: update.message });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    getByIdPacienteMedicamento = async (req: Request, res: Response) => {
        try {
            const IdPaciente = req.body.ID;
            const medicamentosPaciente = await this.service.getMedicamentosPaciente(IdPaciente);

            if (medicamentosPaciente) {
                res.status(200).json({ recetas: medicamentosPaciente });
            } else {
                res.status(404).json({
                    message: "No se encontraron medicamentos para este paciente."
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // Este método se invoca desde el cron job
    getAlarms = async (req: Request, res: Response) => {
        try {
            await this.service.getAlarmas(); // Llama al servicio que gestiona las alarmas
            res.status(200).json({ message: "Alarmas procesadas correctamente." });
        } catch (error) {
            res.status(500).json({
                message: "Error al procesar las alarmas: " + error.message
            });
        }
    }
}
