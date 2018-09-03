export abstract class Connector {
  constructor(public tableName: string) { }

  public abstract async tableExists(): Promise<boolean>;
  public abstract async createTable(): Promise<void>;
  public abstract async dropTable(): Promise<void>;
  public abstract async getMigrationKeys(): Promise<string[]>;
  public abstract async insertMigrationKey(key: string): Promise<void>;
  public abstract async deleteMigrationKey(key: string): Promise<void>;
}

export default Connector;
