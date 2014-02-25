package com.mentorsoftwareltd.androidtutorial;

import java.util.List;

import java.util.Random;


import android.app.ListActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;

import com.mentorsoftwareltd.androidtutorial.db.CommentDao;
import com.mentorsoftwareltd.androidtutorial.db.MyComment;

public class SqlList extends ListActivity {
	private CommentDao datasource;
	private EditText editText;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		 datasource = new CommentDao(getApplicationContext());
		 datasource.open();
		 
		 List<MyComment> values = datasource.getAllComments();

		 ArrayAdapter<MyComment> adapter = new ArrayAdapter<MyComment>(this,
			        android.R.layout.simple_list_item_1, values);
			    setListAdapter(adapter);
		setContentView(R.layout.activity_sql_liste);
		editText = (EditText)findViewById(R.id.editText1);

		  
		   
	}

	  @Override
	  protected void onResume() {
	    datasource.open();
	    super.onResume();
	  }

	  @Override
	  protected void onPause() {
	    datasource.close();
	    super.onPause();
	  }
	  
	  // Will be called via the onClick attribute
	  // of the buttons in main.xml
	  public void onClick(View view) {
	    @SuppressWarnings("unchecked")
	    ArrayAdapter<MyComment> adapter = (ArrayAdapter<MyComment>) getListAdapter();
	    MyComment comment = null;
	    switch (view.getId()) {
	    case R.id.add:
	      // save the new comment to the database
	      String value="Comment + " + editText.getText().toString();
	      comment = datasource.createComment(value);
	      adapter.add(comment);
	      break;
	    case R.id.delete:
	      if (getListAdapter().getCount() > 0) {
	        comment = (MyComment) getListAdapter().getItem(0);
	        datasource.deleteComment(comment);
	        adapter.remove(comment);
	      }
	      break;
	    }
	    adapter.notifyDataSetChanged();
	  }

}
