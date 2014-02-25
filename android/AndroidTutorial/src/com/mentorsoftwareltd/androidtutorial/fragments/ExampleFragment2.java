package com.mentorsoftwareltd.androidtutorial.fragments;

import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.mentorsoftwareltd.androidtutorial.R;

public class ExampleFragment2 extends Fragment {

	 @Override
	    public View onCreateView(LayoutInflater inflater, ViewGroup container,
	                             Bundle savedInstanceState) {
	        return inflater.inflate(R.layout.example_fragment2, container, false);
	    }

}
