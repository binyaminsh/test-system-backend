/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error, Model } from 'mongoose';
import { Company, CompanyDocument } from 'src/schemas/company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>){}
  
  async create(createCompanyDto: CreateCompanyDto) {
    try {
      return new this.companyModel(createCompanyDto).save();
    } catch (error) {
      throw new Error('something went wrong');
    }
  }

  async findAll() {
    try {
      return this.companyModel.find(); //.populate({path: 'topics', select: ['_id', 'name']})
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      return this.companyModel.findOne({_id: id});
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    try {
      return this.companyModel.updateOne({_id: id}, {$set: {...updateCompanyDto}})
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      return this.companyModel.deleteOne({_id: id}); 
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
