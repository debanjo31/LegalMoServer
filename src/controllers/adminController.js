import { Company } from "../models/companymodel";
import { Lawyer } from "../models/lawyermodel";

export const companys = async(req, res) => {
    try {
        const company = await Company.find();
        res.status(200).json({company})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const lawyers = async(req, res) => {
    try {
        const lawyer = await Lawyer.find();
        res.status(200).json({lawyer})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const companyProfile = async(req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        res.status(200).json({company})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const lawyerProfile = async(req, res) => {
    try {
        const lawyer = await Lawyer.findById(req.params.id);
        res.status(200).json({lawyer})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}