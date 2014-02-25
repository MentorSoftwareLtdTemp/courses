package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;

public class GoogleMapTest extends Activity {
	//static final LatLng HAMBURG = new LatLng(53.558, 9.927);
	//static final LatLng KIEL = new LatLng(53.551, 9.993);
	//private GoogleMap map;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_google_map_test);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.google_map_test, menu);
		return true;
	}

}
