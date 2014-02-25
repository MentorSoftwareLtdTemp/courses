package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.ActionMode;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class ActivityTwo extends Activity {
	private ActionMode actionMode;

	public void showMainActivity(View view) {
		Intent i = new Intent(this, MainActivity.class);
		startActivity(i);
		Button b;
	}

	@Override
	public void finish() {
		Intent data = new Intent();
		data.putExtra("returnKey1", "value1");
		data.putExtra("returnKey1", "value2");
		setResult(RESULT_OK, data);
		super.finish();

	}

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_two);
		super.onStart();

		Bundle extras = getIntent().getExtras();
		if (extras == null) {
			return;
		}
		// Get data via the key
		String value1 = extras.getString("key1");
		if (value1 != null) {
			TextView textView = (TextView) findViewById(R.id.textView1);
			textView.setText(value1);
		}
		value1 = extras.getString("key2");
		if (value1 != null) {
			TextView textView = (TextView) findViewById(R.id.textView2);
			textView.setText(value1);

		}
	

	}

	
}
