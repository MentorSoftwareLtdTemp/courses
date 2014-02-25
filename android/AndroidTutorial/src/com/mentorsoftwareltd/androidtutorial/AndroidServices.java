package com.mentorsoftwareltd.androidtutorial;

import java.util.Calendar;

import android.app.Activity;
import android.app.AlarmManager;
import android.content.Context;
import android.content.Intent;
import android.media.AudioManager;
import android.os.Bundle;
import android.os.Vibrator;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import com.mentorsoftwareltd.androidtutorial.services.MyService;

public class AndroidServices extends Activity {
	private Spinner spinerServices;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_android_services);
		
		spinerServices = (Spinner) findViewById(R.id.spinnerService);
		ArrayAdapter adapter = ArrayAdapter.createFromResource(this,
				R.array.AndroidServices, android.R.layout.simple_spinner_item);
		adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		spinerServices.setAdapter(adapter);
	}


	public void androidService(View v)
	{
		int position = spinerServices.getSelectedItemPosition();
	    switch (position) {
	    case 0:
	    		Vibrator vb=(Vibrator)getApplicationContext().getSystemService(Context.VIBRATOR_SERVICE);
	    		vb.vibrate(100);
	    		AudioManager am=(AudioManager)getApplicationContext().getSystemService(Context.AUDIO_SERVICE);
	    	break;
	    	
	    case 1:
	    		Calendar calendar = Calendar.getInstance();
	    		calendar.add(Calendar.MINUTE, 1);
	    	//PendingIntent pi = PendingIntent.getActivity(this, requestCode, intent, flags);
	    		AlarmManager alarm=(AlarmManager)getApplicationContext().getSystemService(Context.ALARM_SERVICE);
	    	//alarm.set(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), operation);
	    	break;
	    	
	    case 2:
	    	//PendingIntent pi = PendingIntent.getActivity(this, requestCode, intent, flags);
	    	AudioManager audio=(AudioManager)getApplicationContext().getSystemService(Context.AUDIO_SERVICE);
	    	audio.playSoundEffect(AudioManager.FX_KEY_CLICK);
	    	//alarm.set(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), operation);
	    	break;
	    }
	}
	public void intentReceiver(View v)
	{
	    Intent intent = new Intent();
	    intent.setAction("com.mentorsoftwareltd.mybroadcast");
	    sendBroadcast(intent); 
	}
	
	public void startService(View v)
	{
		// use this to start and trigger a service
		Intent i= new Intent(getApplicationContext(), MyService.class);
		// potentially add data to the intent
		i.putExtra("KEY1", "Value to be used by the service");
		getApplicationContext().startService(i); 
	}

}
