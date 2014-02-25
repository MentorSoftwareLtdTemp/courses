package com.mentorsoftwareltd.androidtutorial.services.old;

import android.os.AsyncTask;
import android.widget.TextView;

public class MyTask extends AsyncTask<String, String, Integer> {
	private final TextView textView;
	
	public MyTask(final TextView textView) {
		this.textView = textView;
	}
	@Override
	protected void onPreExecute() {
		super.onPreExecute();
		textView.setText("On preexecute");
	}
	
	@Override
	protected Integer doInBackground(String... params) {
		int i;
		for (i=0;i<100000000;i++)
		{
			publishProgress("Progress");
		}
		return i;
	
	}
	
	@Override
	protected void onPostExecute(Integer result) {
		textView.setText("On postxecute");
		super.onPostExecute(result);
	}
	
	@Override
	protected void onProgressUpdate(String... values) {
		textView.setText("On progresUpdate");

		super.onProgressUpdate(values);
	}

	

}
