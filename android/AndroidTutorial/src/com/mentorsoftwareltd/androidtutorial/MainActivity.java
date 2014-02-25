package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.Toast;

import com.mentorsoftwareltd.androidtutorial.camera.CameraActivity;
import com.mentorsoftwareltd.androidtutorial.files.StorageActivity;
import com.mentorsoftwareltd.androidtutorial.gestures.SingleTouchActivity;
import com.mentorsoftwareltd.androidtutorial.layouts.GridLayoutActivity;
import com.mentorsoftwareltd.androidtutorial.layouts.GridViewActivity;
import com.mentorsoftwareltd.androidtutorial.layouts.LinearLayoutActivity;
import com.mentorsoftwareltd.androidtutorial.layouts.ListViewActivity;
import com.mentorsoftwareltd.androidtutorial.layouts.RelativeLayoutActivity;
import com.mentorsoftwareltd.androidtutorial.services.BroadcastReceiverActivity;

public class MainActivity extends Activity {

	private int REQUEST_CODE = 1;
	private Spinner spinnerExplicit;
	private Spinner spinnerImplicit;
	private Spinner spinnerOther;

	private MenuItem item2;
	private MenuItem item3;
	private MenuItem itemSetting;

	private SharedPreferences preferences;
	private static final String TAG="com.mentorsoftwareltd.androidtutorial.MainActivity";

	private void showPackageInfo()
	{
		PackageManager packageManager = getPackageManager();
		try {
			PackageInfo pck = packageManager
					.getPackageInfo(getPackageName(), 0);
			Log.i("Package versiobnCode", "" + pck.versionCode);
			Log.i("Package versionName", pck.versionName);

		} catch (NameNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@Override
	protected void onStart() {
		super.onStart();
		Log.i(TAG, "Method onStart");
	}
	
	@Override
	protected void onResume() {
		Log.i(TAG, "Method onResume");
		super.onResume();
	}
	@Override
	protected void onRestart() {
		Log.i(TAG, "Method onRestart");
		super.onRestart();
	}
	
	@Override
	protected void onPause() {
		super.onPause();
		Log.i(TAG, "Method onPause");
	}
	
	@Override
	protected void onStop() {
		super.onStop();
		Log.i(TAG, "Method onStop");
	}
	
	
	@Override
	protected void onDestroy() {
		super.onDestroy();
		Log.i(TAG, "Method onDestroy");
	}
	
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		Log.i(TAG, "Method onCreate");

		preferences = PreferenceManager.getDefaultSharedPreferences(this);
		getActionBar().setTitle("");
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		spinnerExplicit = (Spinner) findViewById(R.id.spinnerExplicit);
		ArrayAdapter adapter = ArrayAdapter.createFromResource(this,
				R.array.ExplicitIntents, android.R.layout.simple_spinner_item);
		adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		spinnerExplicit.setAdapter(adapter);

		spinnerImplicit = (Spinner) findViewById(R.id.spinnerImplicit);
		adapter = ArrayAdapter.createFromResource(this,
				R.array.ImplicitIntents, android.R.layout.simple_spinner_item);
		adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		spinnerImplicit.setAdapter(adapter);

		spinnerOther = (Spinner) findViewById(R.id.spinnerOther);
		adapter = ArrayAdapter.createFromResource(this, R.array.Other,
				android.R.layout.simple_spinner_item);
		adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		spinnerOther.setAdapter(adapter);

	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		item2 = menu.findItem(R.id.action_2);
		item3 = menu.findItem(R.id.action_3);
		itemSetting = menu.findItem(R.id.action_settings);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		switch (item.getItemId()) {
		case R.id.action_settings:
			Toast.makeText(this, "You select settings", Toast.LENGTH_LONG)
					.show();
			// item1.setVisible(false);
			/*Intent i = new Intent(MainActivity.this,
					MyPreferencesActivity.class);
			startActivity(i);*/
			// invalidateOptionsMenu();
			return true;
		case R.id.action_2:
			Toast.makeText(this, "You select action2", Toast.LENGTH_LONG)
					.show();
			getWindow().
			  getDecorView().
			  setSystemUiVisibility(View.SYSTEM_UI_FLAG_HIDE_NAVIGATION); 
			return true;
		case R.id.action_3:
			Toast.makeText(this, "You select action3", Toast.LENGTH_LONG)
					.show();
			invalidateOptionsMenu();
			return true;
		// If home icon is clicked but not needed since 3.0.
		//android:parentActivityName="MainActivity" for other activities
		case android.R.id.home:
		  Intent intent = new Intent(this, MainActivity.class);
		  intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
		  startActivity(intent);
		  return true; 
		default:
			return super.onOptionsItemSelected(item);

		}
	}

	public void onClickExplicit(View v) {
		int position = spinnerExplicit.getSelectedItemPosition();

		switch (position) {
		case 0:
			showActivityTwo();
			break;
		case 1:
			showActivityTwoData();
		case 2:
			showActivityTwoAsSubActivity();

		}
	}

	public void onClickOther(View v) {
		int position = spinnerOther.getSelectedItemPosition();

		switch (position) {
		case 0:
			showLinearLayout(v);
			break;
		case 1:
			showGridLayout(v);
			break;
		case 2:
			showRelativeLayout(v);
			break;
		case 3:
			showListView(v);
			break;
		case 4:
			showGridView(v);
			break;
		case 5:
			showEventsActivity(v);
			break;
		case 6:
			showDialogs(v);
			break;
		case 7:
			showAndroidThread(v);
			break;
		case 8:
			showAndroidServices(v);
			break;
		case 9:
			showFragments(v);
			break;
		case 10:
			showStorageActivity(v);
			break;
		case 11:
			showNotification(v);
			break;
		case 12:
			showLocation(v);
			break;
		case 13:
			showContextualActionBar(v);
			break;
		case 14:
			showSqlList();
			break;
		case 15:
			showBroadcast1();
			break;
		case 16:
			showCamera();
			break;
		case 17:
			showTouchSingle();
			break;
		case 18:
			showLocation();
			break;
		}
	}
	
	private void showLocation()
	{
		Intent i = new Intent(this, ShowLocationActivity.class);
		startActivity(i);
		
	}
	private void showCamera()
	{
		Intent i = new Intent(this, CameraActivity.class);
		startActivity(i);
		
	}
	
	private void showTouchSingle()
	{
		Intent i = new Intent(this, SingleTouchActivity.class);
		startActivity(i);
		
	}
	private void showBroadcast1()
	{
		Intent i = new Intent(this, BroadcastReceiverActivity.class);
		startActivity(i);
		
	}
	private void showSqlList()
	{
		Intent i = new Intent(this, SqlList.class);
		startActivity(i);
	}
	private void showContextualActionBar(View v) {
		Intent i = new Intent(this, ContextualActionBar.class);
		startActivity(i);
	}

	private void showGridView(View v) {
		Intent i = new Intent(this, GridViewActivity.class);
		startActivity(i);
		
	}

	private void showLocation(View v) {
		Intent i = new Intent(this, GeoLocation.class);
		startActivity(i);
	}

	private void showNotification(View v) {
		Intent i = new Intent(this, NotificationActivity.class);
		startActivity(i);
	}

	public void showStorageActivity(View v)
	{
		Intent i = new Intent(this, StorageActivity.class);
		startActivity(i);
	}

	public void showActivityTwo() {
		Intent i = new Intent(this, ActivityTwo.class);
		startActivity(i);
	}

	public void showActivityTwoData() {

		Intent i = new Intent(this, ActivityTwo.class);
		i.putExtra("key1", "value1");
		i.putExtra("key2", "value2");
		i.putExtra(android.content.Intent.EXTRA_TEXT, "Extra text");
		startActivity(i);
	}

	public void showActivityTwoAsSubActivity() {
		Intent i = new Intent(this, ActivityTwo.class);
		i.putExtra("key1", "The value one for ActivityTwo ");
		i.putExtra("key2", "The value two for ActivityTwo");
		startActivityForResult(i, REQUEST_CODE);
	}

	@Override
	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
		if (resultCode == RESULT_OK && requestCode == REQUEST_CODE) {
			if (data.hasExtra("returnKey1")) {
				Toast.makeText(this, data.getExtras().getString("returnKey1"),
						Toast.LENGTH_SHORT).show();
			} else {
				String result = data.toUri(0);
				Toast.makeText(this, result, Toast.LENGTH_LONG);
			}
		}
	}

	public void onClickImplicit(View w) {
		int position = spinnerImplicit.getSelectedItemPosition();
		Intent intent = null;
		switch (position) {
		case 0:
			intent = new Intent(Intent.ACTION_VIEW,
					Uri.parse("http://www.mentorsoftwareltd.com"));
			break;
		case 1:
			intent = new Intent(Intent.ACTION_CALL,
					Uri.parse("tel:(+48)123456789"));
			break;
		case 2:
			intent = new Intent(Intent.ACTION_DIAL,
					Uri.parse("tel:(+49)12345789"));
			startActivity(intent);
			break;
		case 3:
			intent = new Intent(Intent.ACTION_VIEW,
					Uri.parse("geo:50.123,7.1434?z=19"));
			break;
		case 4:
			intent = new Intent(Intent.ACTION_VIEW,
					Uri.parse("geo:0,0?q=query"));
			break;
		case 5:
			intent = new Intent("android.media.action.IMAGE_CAPTURE");
			break;
		case 6:
			intent = new Intent(Intent.ACTION_VIEW,
					Uri.parse("content://contacts/people/"));
			break;
		case 7:
			intent = new Intent(Intent.ACTION_EDIT,
					Uri.parse("content://contacts/people/1"));
			break;

		}
		if (intent != null) {
			startActivity(intent);
		}
	}

	public void showBrowser(View w) {
		String url = "http://www.mentorsoftwareltd.com";
		Intent i = new Intent(Intent.ACTION_VIEW);
		i.setData(Uri.parse(url));
		startActivity(i);

	}

	public void sendEmail(View v) {

		Intent intent = new Intent(Intent.ACTION_SEND);
		intent.setType("text/plain");
		intent.putExtra(android.content.Intent.EXTRA_TEXT,
				"Hi,This is text for you!");
		startActivity(intent);

	}

	public void showLinearLayout(View v) {
		Intent intent = new Intent(this, LinearLayoutActivity.class);
		startActivity(intent);
	}

	public void showRelativeLayout(View v) {
		Intent intent = new Intent(this, RelativeLayoutActivity.class);
		startActivity(intent);

	}

	public void showGridLayout(View v) {
		Intent intent = new Intent(this, GridLayoutActivity.class);
		startActivity(intent);
	}

	public void showEventsActivity(View v) {
		Intent intent = new Intent(this, EventActivity.class);
		startActivity(intent);
	}

	public void showDialogs(View v) {
		Intent intent = new Intent(this, DialogActivity.class);
		startActivity(intent);
	}

	public void showListView(View v) {
		Intent intent = new Intent(this, ListViewActivity.class);
		startActivity(intent);
	}

	public void showFragment(View v) {
		Intent intent = new Intent(this, FragmentActivity.class);
		startActivity(intent);
	}

	public void showAndroidServices(View v) {
		Intent intent = new Intent(this, AndroidServices.class);
		startActivity(intent);
	}

	public void showAndroidThread(View v) {
		Intent intent = new Intent(this, ThreadActivity.class);
		startActivity(intent);

	}

	public void showFragments(View v) {
		Intent intent = new Intent(this, FragmentActivity.class);
		startActivity(intent);

	}

}
