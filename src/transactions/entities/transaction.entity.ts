import {
  Model,
  Column,
  Table,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ToNumber } from '../../common/db/to-number-decorator';
import { Account } from '../../accounts/entities/account.entity';

export enum TransactionCategory {
  CATEGORY1 = 'category1',
  CATEGORY2 = 'category2',
}
export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export const TransactionCategoryList: string[] =
  Object.values(TransactionCategory);

export const TransactionTypeList: string[] = Object.values(TransactionType);

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  payment_date: Date;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  category: TransactionCategory;

  @ToNumber
  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column({ allowNull: false })
  type: TransactionType;

  @ForeignKey((): typeof Account => Account)
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  account_id: string;

  @BelongsTo((): typeof Account => Account)
  account: Account;
}
