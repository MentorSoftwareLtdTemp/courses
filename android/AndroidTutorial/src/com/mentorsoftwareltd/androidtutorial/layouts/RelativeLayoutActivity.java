package com.mentorsoftwareltd.androidtutorial.layouts;

import com.mentorsoftwareltd.androidtutorial.R;
import com.mentorsoftwareltd.androidtutorial.R.layout;
import com.mentorsoftwareltd.androidtutorial.R.menu;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class RelativeLayoutActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_relative_layout);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.relative_layout, menu);
		return true;
	}

}
