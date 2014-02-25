package com.mentorsoftwareltd.androidtutorial.files;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.OnSharedPreferenceChangeListener;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.mentorsoftwareltd.androidtutorial.R;

public class StorageActivity extends Activity {
	private EditText editTextPrefs;
	private EditText editTextFile;
	private Button writeToPrefs;
	private Button readFromPrefs;
	private Button writeToFile;
	private Button readFromFile;
	private static String fileName = "MYFILE.txt";
	
	private String key = "textEditStorage";
	private OnSharedPreferenceChangeListener listener;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_storage);
		editTextPrefs = (EditText) findViewById(R.id.editTextPrefs);
		editTextFile = (EditText) findViewById(R.id.editTextFile);
		
		writeToPrefs = (Button) findViewById(R.id.buttonWritePrefs);
		readFromPrefs = (Button) findViewById(R.id.buttonReadPrefs);
		
		writeToFile = (Button) findViewById(R.id.buttonWriteFile);
		readFromFile = (Button) findViewById(R.id.ButtonReadFile);

		initStorage();
		
		writeToPrefs.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				writeToPrefs();
			}
		});
		readFromPrefs.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				readFromPrefs();
			}
		});
		
		writeToFile.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				writeToFile();
			}
		});
		
		readFromFile.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				readFromFile();
			}
		});

	
	}
	
	@Override
	protected void onPause() {
		super.onPause();
		//unregister listener
		SharedPreferences preferences = PreferenceManager
				.getDefaultSharedPreferences(this);
		preferences.unregisterOnSharedPreferenceChangeListener(listener);
	}
	
	private void initStorage()
	{
		SharedPreferences preferences = PreferenceManager
				.getDefaultSharedPreferences(this);

		//register listener
		readFromPrefs();
		listener = new SharedPreferences.OnSharedPreferenceChangeListener() {
		  public void onSharedPreferenceChanged(SharedPreferences prefs, String key) {
			  Toast toast = Toast.makeText(getApplicationContext(), "Key " + key + " changed.", Toast.LENGTH_SHORT);
			  toast.show();
		  }
		};
		preferences.registerOnSharedPreferenceChangeListener(listener);

	}
	
	private void readFromPrefs()
	{
		// Read shared preferences
				SharedPreferences preferences = PreferenceManager
						.getDefaultSharedPreferences(this);
				String value = preferences.getString("textEditStorage",
						"Not yet defined");
				
				editTextPrefs.setText(value);
	}
	
	private void writeToPrefs()
	{
		// write shared preferences
		SharedPreferences settings = PreferenceManager
				.getDefaultSharedPreferences(this);
		SharedPreferences.Editor editor = settings.edit();
		editor.putString("textEditStorage", editTextPrefs.getText().toString());
		editor.commit();

	}

	@Override
	protected void onStop() {
		super.onStop();
		writeToPrefs();
	}

//File

	public void writeToFile() { 
		///data/data/com.mentorsoftwareltd.androidtutorial/files
		  String eol = System.getProperty("line.separator");
		  BufferedWriter writer = null;
		  try {
		    writer = 
		      new BufferedWriter(new OutputStreamWriter(openFileOutput(this.fileName, 
		        Context.MODE_PRIVATE)));
		    String value = this.editTextFile.getText().toString();
		    writer.write(value + eol);
		  } catch (Exception e) {
		      e.printStackTrace();
		  } finally {
		    if (writer != null) {
		    try {
		      writer.close();
		    } catch (IOException e) {
		      e.printStackTrace();
		    }
		    }
		  }
	}
	
	public void readFromFile() 
	{
		 String eol = System.getProperty("line.separator");
		  BufferedReader input = null;
		  try {
		    input = new BufferedReader(new InputStreamReader(openFileInput(fileName)));
		    String line;
		    StringBuffer buffer = new StringBuffer();
		    while ((line = input.readLine()) != null) {
		    		this.editTextFile.setText(line);
		    		//buffer.append(line + eol);
		    }
		  } catch (Exception e) {
		     e.printStackTrace();
		  } finally {
		  if (input != null) {
		    try {
		    input.close();
		    } catch (IOException e) {
		      e.printStackTrace();
		    }
		    }
		  }
		} 
	
//SDCARD
	//File directory = Environment.getExternalStorageDirectory();
	  // assumes that a file article.rss is available on the SD card
	//File file = new File(directory + "/article.rss");

}