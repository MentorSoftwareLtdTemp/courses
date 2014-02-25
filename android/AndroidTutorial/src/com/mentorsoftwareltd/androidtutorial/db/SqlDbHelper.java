package com.mentorsoftwareltd.androidtutorial.db;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteDatabase.CursorFactory;
import android.database.sqlite.SQLiteOpenHelper;

public class SqlDbHelper extends SQLiteOpenHelper {
	public static final String TABLE_MYTABLE = "mytable";
	public static final String COLUMN_ID = "id";
	public static final String COLUMN_COMMENT = "comment";

	private static final String DATABASE_NAME = "mydatabase.db";
	private static final int DATABASE_VERSION = 1;
	
	// Database creation sql statement
	  private static final String DATABASE_CREATE = "create table "
	      + TABLE_MYTABLE + "(" + COLUMN_ID
	      + " integer primary key autoincrement, " + COLUMN_COMMENT
	      + " text not null);";

	public SqlDbHelper(Context context) {
		super(context, DATABASE_NAME, null, DATABASE_VERSION);
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		db.execSQL(DATABASE_CREATE);
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		  db.execSQL("DROP TABLE IF EXISTS " + TABLE_MYTABLE);
		    onCreate(db);
		   
	}

}
