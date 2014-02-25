package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.sax.TextElementListener;
import android.text.Editable;
import android.text.TextWatcher;
import android.text.method.KeyListener;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.View.OnKeyListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class EventActivity extends Activity {

	private Button button;
	private EditText editText;
	private TextView textView;

	private OnClickListener buttonClickListener = new OnClickListener() {
		public void onClick(View v) {
			Context context = getApplicationContext();
			CharSequence text = "Button clicked";
			int duration = Toast.LENGTH_LONG;

			Toast toast = Toast.makeText(context, text, duration);
			toast.show();
		}
	};
	private OnKeyListener textKeyListener = new OnKeyListener() {
		
		@Override
		public boolean onKey(View v, int keyCode, KeyEvent event) {
			textView.setText("Key up. Key code " + keyCode);

			return false;
		}
	};

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_event);
		// Capture our button from layout
		button = (Button) findViewById(R.id.buttonEvent1);
		editText = (EditText) findViewById(R.id.editTextEvent1);
		textView = (TextView) findViewById(R.id.textViewEvent);
		// Register the onClick listener with the implementation above
		button.setOnClickListener(buttonClickListener);
		editText.setOnKeyListener(textKeyListener);
		//editText.setKeyListener(textKeyListener);
		editText.addTextChangedListener(new TextWatcher() {
			
			@Override
			public void onTextChanged(CharSequence s, int start, int before, int count) {
				textView.setText("text change ");

			}
			
			@Override
			public void beforeTextChanged(CharSequence s, int start, int count,
					int after) {
				textView.setText("before text change " );
				
			}
			
			@Override
			public void afterTextChanged(Editable s) {
				textView.setText("after text change ");
				
			}
		});

	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.event, menu);
		return true;
	}

}
