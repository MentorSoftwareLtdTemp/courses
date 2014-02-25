package com.mentorsoftwareltd.androidtutorial.layouts;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.widget.GridView;

import com.mentorsoftwareltd.androidtutorial.R;
import com.mentorsoftwareltd.androidtutorial.adapters.ImageAdapter;

public class GridViewActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_grid_view);
		 GridView gridView = (GridView) findViewById(R.id.grid_view);
		 
	     // Instance of ImageAdapter Class
	     gridView.setAdapter(new ImageAdapter(this));
	}

	

}
