package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.Toast;

public class DialogActivity extends Activity {
	private static final int DIALOG_ALERT = 10;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_dialog);
	}
	
	

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.dialog, menu);
		return true;
	}
	
	public void onClick(View view) {
	    showDialog(DIALOG_ALERT);
	} 
	
	public void showToast(View view) {
		Context context = getApplicationContext();
		CharSequence text = "Hello toast!";
		int duration = Toast.LENGTH_SHORT;

		Toast toast = Toast.makeText(context, text, duration);
		toast.show();
	} 
	
	@Override
	protected Dialog onCreateDialog(int id) {
	  switch (id) {
	    case DIALOG_ALERT:
	    // Create out AlterDialog
	    	  Builder builder = new AlertDialog.Builder(this);
		      builder.setMessage("This will end the activity");
		      builder.setCancelable(true);
		      builder.setPositiveButton("I agree", new DialogInterface.OnClickListener() {
				
				@Override
				public void onClick(DialogInterface dialog, int which) {
					  Toast.makeText(getApplicationContext(), "Activity will continue",
					          Toast.LENGTH_LONG).show();				
				}
			});
		      builder.setNegativeButton("No, no", new DialogInterface.OnClickListener() {
				
				@Override
				public void onClick(DialogInterface dialog, int which) {
					DialogActivity.this.finish();
				}
			});
		      AlertDialog dialog = builder.create();
		      dialog.show();
	   }
	  return super.onCreateDialog(id);
	}
	
	

}
