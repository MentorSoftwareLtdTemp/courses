package com.mentorsoftwareltd.androidtutorial.layouts;

import java.util.ArrayList;
import java.util.List;

import android.app.Activity;
import android.os.Bundle;
import android.view.ContextMenu;
import android.view.ContextMenu.ContextMenuInfo;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import com.mentorsoftwareltd.androidtutorial.R;

public class ListViewActivity extends Activity {
	private ListView listView;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_list_view);
		listView = (ListView) findViewById(R.id.mylist);
		List<String> values = new ArrayList<String>();
		for (int i = 0; i < 100; i++) {
			values.add("Text" + i);
		}
		// Define a new Adapter
		// Parameters:
		// 1 - Context
		// 2 - Layout for the row
		// 3 - ID of the TextView to which the data is written
		// 4 - the Array of data

		ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
				android.R.layout.simple_list_item_1, android.R.id.text1, values);
		// Assign adapter to ListView
		listView.setAdapter(adapter);

		listView.setOnItemClickListener(new OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long id) {
				Toast.makeText(getApplicationContext(),
						"Click ListItem Number " + position, Toast.LENGTH_LONG)
						.show();
			}
		});

		registerForContextMenu(listView);
		
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.list_view, menu);
		return true;
	}

	@Override
	public void onCreateContextMenu(ContextMenu menu, View v,
			ContextMenuInfo menuInfo) {

		super.onCreateContextMenu(menu, v, menuInfo);
		MenuInflater inflater = getMenuInflater();
		inflater.inflate(R.menu.contextmenu1, menu);

	}

	@Override
	public boolean onContextItemSelected(MenuItem item) {
		// Toast t=Toast.makeText(getCo, text, duration);
		// t.setGravity(Gravity.TOP, 0, 0);
		listView.getSelectedItem();
		return super.onContextItemSelected(item);
	}

}
