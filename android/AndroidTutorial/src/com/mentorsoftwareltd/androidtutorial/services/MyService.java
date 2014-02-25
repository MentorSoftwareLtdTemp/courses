package com.mentorsoftwareltd.androidtutorial.services;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

public class MyService extends Service {
	private Runnable run;
	public MyService() {
	}

	@Override
	public IBinder onBind(Intent intent) {
		//throw new UnsupportedOperationException("Not yet implemented");
		return null;
		
	}
	
	@Override
	public int onStartCommand(Intent intent, int flags, int startId) {
		Log.i("MY_SERVICE_TAG","Service onStartCommand");
		run = new Runnable() {
			
			@Override
			public void run() {
				 for (int i = 0; i <= 100; i++) {
			          final int value = i;
			          doWork(i);
				 }
			}

			private void doWork(int i) {
				 try { 
						Log.i("MY_SERVICE_TAG","Service doWork " + i);
			            Thread.sleep(2000);
			          } catch (InterruptedException e) {
			            e.printStackTrace();
			          }

			}
				 
		};
		run.run();
		return Service.START_NOT_STICKY;
		//return super.onStartCommand(intent, flags, startId);
		
	}
	
	@Override
	public void onCreate() {
		super.onCreate();
		Log.i("MY_SERVICE_TAG","Service onCreate");
	}
	
	@Override
	public void onDestroy() {
		super.onDestroy();
		Log.i("MY_SERVICE_TAG","Service onDestroy");
	}
	
	
	
	
	
	
}
