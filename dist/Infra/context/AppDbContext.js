import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
export async function InitDataBase() {
    const db = await open({
        filename: '../../DataBase/database.db',
        driver: sqlite3.Database,
    });
    return db;
}
