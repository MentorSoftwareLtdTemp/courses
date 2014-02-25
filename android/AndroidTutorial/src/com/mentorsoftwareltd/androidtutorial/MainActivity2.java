package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.Toast;
import android.widget.AdapterView.OnItemClickListener;

public class MainActivity2 extends Activity {

	private ListView listView;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main2);
		
		listView = (ListView) findViewById(R.id.listView1);
		final ArrayAdapter adapter = ArrayAdapter.createFromResource(this,
				R.array.MainList, android.R.layout.simple_list_item_1);
		listView.setAdapter(adapter);
		listView.setOnItemClickListener(new OnItemClickListener() {
			  @Override
			  public void onItemClick(AdapterView<?> parent, View view,
			    int position, long id) {
				  String value=(String)adapter.getItem(position);
				  switch (position) {
				case 0:  //Intents
					
					break;

				default:
					break;
				}
			
			    Toast.makeText(getApplicationContext(),
			      "Click ListItem Number " + position, Toast.LENGTH_LONG)
			      .show();
			  }
			}); 
		
	}
	
	
}
