import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction) private transactionModel: typeof Transaction,
  ) {}

  create(
    createTransactionDto: CreateTransactionDto | string | any,
  ): Promise<Transaction> {
    return this.transactionModel.create(createTransactionDto);
  }

  findAll(): Promise<Transaction | string | any> {
    return this.transactionModel.findAll();
  }
}
