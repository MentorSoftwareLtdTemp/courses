package com.mentorsoftwareltd.androidtutorial.services;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Vibrator;
import android.telephony.TelephonyManager;
import android.widget.Toast;


public class MyBroadcastReceiver extends BroadcastReceiver {
	  @Override
	  public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "Yes I am up!!!",
	        Toast.LENGTH_LONG).show();
	    // Vibrate the mobile phone
	    Vibrator vibrator = (Vibrator) context.getSystemService(Context.VIBRATOR_SERVICE);
	    vibrator.vibrate(2000);
	    
	    // Vibrate the mobile phone
	    //Vibrator vibrator = (Vibrator) context.getSystemService(Context.VIBRATOR_SERVICE);
	    //vibrator.vibrate(2000);
	    //TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(Context.);
	    //ACCESS_COARSE
	    //ACCESS_FINE
	   // telephonyManager.getCellLocation();
	    
	  }

	} 
