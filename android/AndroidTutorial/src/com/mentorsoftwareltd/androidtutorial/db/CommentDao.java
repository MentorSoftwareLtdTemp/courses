package com.mentorsoftwareltd.androidtutorial.db;

import java.util.ArrayList;
import java.util.List;


import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;

public class CommentDao {
	 private SQLiteDatabase database;
	  private SqlDbHelper dbHelper;
	  private String[] allColumns = { SqlDbHelper.COLUMN_ID,
	      SqlDbHelper.COLUMN_COMMENT };

	  public CommentDao(Context context) {
	    dbHelper = new SqlDbHelper(context);
	  }

	  public void open() throws SQLException {
	    database = dbHelper.getWritableDatabase();
	  }

	  public void close() {
	    dbHelper.close();
	  }

	  public MyComment createComment(String comment) {
	    ContentValues values = new ContentValues();
	    values.put(SqlDbHelper.COLUMN_COMMENT, comment);
	    long insertId = database.insert(SqlDbHelper.TABLE_MYTABLE, null,
	        values);
	    Cursor cursor = database.query(SqlDbHelper.TABLE_MYTABLE,
	        allColumns, SqlDbHelper.COLUMN_ID + " = " + insertId, null,
	        null, null, null);
	    cursor.moveToFirst();
	    MyComment newComment = cursorToComment(cursor);
	    cursor.close();
	    return newComment;
	  }

	  public void deleteComment(MyComment comment) {
	    long id = comment.getId();
	    System.out.println("Comment deleted with id: " + id);
	    database.delete(SqlDbHelper.TABLE_MYTABLE, SqlDbHelper.COLUMN_ID
	        + " = " + id, null);
	  }

	  public List<MyComment> getAllComments() {
	    List<MyComment> comments = new ArrayList<MyComment>();

	    Cursor cursor = database.query(SqlDbHelper.TABLE_MYTABLE,
	        allColumns, null, null, null, null, null);

	    cursor.moveToFirst();
	    while (!cursor.isAfterLast()) {
	      MyComment comment = cursorToComment(cursor);
	      comments.add(comment);
	      cursor.moveToNext();
	    }
	    // make sure to close the cursor
	    cursor.close();
	    return comments;
	  }

	  private MyComment cursorToComment(Cursor cursor) {
	    MyComment comment = new MyComment();
	    comment.setId(cursor.getLong(0));
	    comment.setComment(cursor.getString(1));
	    return comment;
	  }
	} 