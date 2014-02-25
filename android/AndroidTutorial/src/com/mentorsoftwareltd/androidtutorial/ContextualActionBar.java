package com.mentorsoftwareltd.androidtutorial;

import android.app.Activity;
import android.os.Bundle;
import android.view.ActionMode;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.AbsListView.MultiChoiceModeListener;
import android.widget.ListView;

public class ContextualActionBar extends Activity {
	private ListView listView;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_contextual_action_bar);
		listView = (ListView) findViewById(R.id.listViewContext);
		if (listView != null) {
			listView.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE_MODAL);
			listView.setMultiChoiceModeListener(new MultiChoiceModeListener() {

				@Override
				public void onItemCheckedStateChanged(ActionMode mode,
						int position, long id, boolean checked) {
					// Here you can do something when items are
					// selected/de-selected,
					// such as update the title in the CAB
				}

				@Override
				public boolean onActionItemClicked(ActionMode mode,
						MenuItem item) {
					// Respond to clicks on the actions in the CAB
					switch (item.getItemId()) {
					case R.id.context_ab1:
						mode.finish(); // Action picked, so close the CAB
						return true;
					case R.id.context_ab2:
						mode.finish(); // Action picked, so close the CAB
						return true;
					default:
						return false;
					}
				}

				@Override
				public boolean onCreateActionMode(ActionMode mode, Menu menu) {
					// Inflate the menu for the CAB
					MenuInflater inflater = mode.getMenuInflater();
					inflater.inflate(R.menu.contextual_action_bar, menu);
					return true;
				}

				@Override
				public void onDestroyActionMode(ActionMode mode) {
					// Here you can make any necessary updates to the activity
					// when
					// the CAB is removed. By default, selected items are
					// deselected/unchecked.
				}

				@Override
				public boolean onPrepareActionMode(ActionMode mode, Menu menu) {
					// Here you can perform updates to the CAB due to
					// an invalidate() request
					return false;
				}
			});
		}
	}

	

}
