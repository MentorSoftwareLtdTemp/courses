package com.mentorsoftwareltd.androidtutorial.gestures;

import com.mentorsoftwareltd.androidtutorial.R;
import com.mentorsoftwareltd.androidtutorial.R.layout;
import com.mentorsoftwareltd.androidtutorial.R.menu;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class SingleTouchActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(new SingleTouchEventView(this, null));
	}

	
}
