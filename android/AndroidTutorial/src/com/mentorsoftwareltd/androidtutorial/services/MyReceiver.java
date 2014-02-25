package com.mentorsoftwareltd.androidtutorial.services;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Vibrator;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.widget.Toast;

public class MyReceiver extends BroadcastReceiver {
	public MyReceiver() {

	}

	@Override
	public void onReceive(Context context, Intent intent) {
		Bundle extras = intent.getExtras();
		Toast.makeText(context, "Yes I am up!!!", Toast.LENGTH_LONG).show();
		if (extras != null) {
			String state = extras.getString(TelephonyManager.EXTRA_STATE);
			if (state != null) {
				Log.i("MY_DEBUG_TAG", state);
				if (state.equals(TelephonyManager.EXTRA_STATE_RINGING)) {
					String phoneNumber = extras
							.getString(TelephonyManager.EXTRA_INCOMING_NUMBER);
					Log.i("MY_DEBUG_TAG", phoneNumber);
				}
			}

		}

		// Start service
		Intent service = new Intent(context, MyService.class);
		context.startService(service);

	}

}
