package com.mentorsoftwareltd.androidtutorial.dialogs;

import android.app.DialogFragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

import com.mentorsoftwareltd.androidtutorial.R;

public class EditNameDialog extends DialogFragment {

	 private EditText mEditText;

	    public EditNameDialog() {
	    }

	    @Override
	    public View onCreateView(LayoutInflater inflater, ViewGroup container,
	            Bundle savedInstanceState) {
	        View view = inflater.inflate(R.layout.fragment_edit_name, container);
	        mEditText = (EditText) view.findViewById(R.id.txt_your_name);
	        getDialog().setTitle("Hello");

	        return view;
	    }

}
