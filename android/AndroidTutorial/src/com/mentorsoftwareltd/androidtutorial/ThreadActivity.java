package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.view.Menu;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;

public class ThreadActivity extends Activity {
	  private Handler handler;
	  private ProgressBar progressHandler;
	  private TextView textHandler;
	  private ProgressBar progressAsyncTask;
	  private TextView textAsyncTask;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_thread);
		progressHandler = (ProgressBar) findViewById(R.id.progressBar1);
	    textHandler = (TextView) findViewById(R.id.textView1);
		progressAsyncTask = (ProgressBar) findViewById(R.id.progressBar2);
	    textAsyncTask = (TextView) findViewById(R.id.textView2);

	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.thread, menu);
		return true;
	}
	
	private void doWork()
	{
        try { 
            Thread.sleep(2000);
          } catch (InterruptedException e) {
            e.printStackTrace();
          }

	}
	
	public void runHandler(View w)
	{
		// Do something long
	    Runnable runnable = new Runnable() {
	      //working thread
	      @Override
	      public void run() {
	        for (int i = 0; i <= 10; i++) {
	          final int value = i;
	          doWork();
	          
	          progressHandler.post(new Runnable() {
	            @Override
	            public void run() {
	              textHandler.setText("Updating");
	              progressHandler.setProgress(value);
	            }
	          });
	        }
	      }
	    };
	    new Thread(runnable).start();
	}
	
	public void runAsyncTask(View w)
	{
		//Params, Progress, Result
		AsyncTask<String, Integer, String> mytask = new AsyncTask<String, Integer, String>()
		{
			@Override
			protected String doInBackground(String... params) {
				
				for (int i = 0; i <= 10; i++) {
			          final int value = i;
			          try {
			            Thread.sleep(2000);
			            publishProgress(value);
			          } catch (InterruptedException e) {
			            e.printStackTrace();
			          }
				}
				return "finished";
			}
			
			@Override
			protected void onPostExecute(String result) {
				textAsyncTask.setText("On postxecute" + result);
				super.onPostExecute(result);
			}
			
			@Override
			protected void onProgressUpdate(Integer... values) {
				
				textAsyncTask.setText("On progresUpdate " + values[0]);
		        progressAsyncTask.setProgress(values[0]);
				super.onProgressUpdate(values);
			}
			
			
		};
		mytask.execute("Start");
	}


}
