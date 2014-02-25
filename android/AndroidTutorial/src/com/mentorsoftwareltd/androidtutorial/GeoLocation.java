package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.content.Context;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.view.Menu;
import android.widget.TextView;
import android.widget.Toast;

public class GeoLocation extends Activity implements LocationListener {

	private TextView latituteField;
	private TextView longitudeField;
	private LocationManager locationManager;
	private String provider;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_geo_location);
		 latituteField = (TextView) findViewById(R.id.TextView02);
		    longitudeField = (TextView) findViewById(R.id.TextView04);

		    // Get the location manager
		    locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
		    // Define the criteria how to select the locatioin provider -> use
		    // default
		    Criteria criteria = new Criteria();
		    provider = locationManager.getBestProvider(criteria, false);
		    Location location = locationManager.getLastKnownLocation(provider);

		    // Initialize the location fields
		    if (location != null) {
		      System.out.println("Provider " + provider + " has been selected.");
		      onLocationChanged(location);
		    } else {
		      latituteField.setText("Location not available");
		      longitudeField.setText("Location not available");
		    }
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.geo_location, menu);
		return true;
	}
	
	@Override
	protected void onResume() {
		// TODO Auto-generated method stub
		super.onResume();
		 locationManager.requestLocationUpdates(provider, 400, 1, this);
	}
	
	@Override
	protected void onPause() {
		super.onPause();
		 locationManager.removeUpdates(this);
	}

	@Override
	public void onLocationChanged(Location location) {
		 int lat = (int) (location.getLatitude());
		    int lng = (int) (location.getLongitude());
		    latituteField.setText(String.valueOf(lat));
		    longitudeField.setText(String.valueOf(lng));
	}

	@Override
	public void onProviderDisabled(String provider) {
		 Toast.makeText(this, "Disabled provider " + provider,
			        Toast.LENGTH_SHORT).show();
	}

	@Override
	public void onProviderEnabled(String provider) {
		Toast.makeText(this, "Enabled new provider " + provider,
		        Toast.LENGTH_SHORT).show();

	}

	@Override
	public void onStatusChanged(String provider, int status, Bundle extras) {
		// TODO Auto-generated method stub

	}

}
