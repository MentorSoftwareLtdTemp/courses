package com.mentorsoftwareltd.androidtutorial.adapters;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.GridView;
import android.widget.ImageView;

import com.mentorsoftwareltd.androidtutorial.R;

public class ImageAdapter extends BaseAdapter {
	// Keep all Images in array
    public Integer[] images = {
            R.drawable.ic_action_accept, R.drawable.ic_action_back,
            R.drawable.ic_action_bad, R.drawable.ic_action_call,
            R.drawable.ic_action_cancel, R.drawable.ic_action_cloud,
            R.drawable.ic_action_collapse, R.drawable.ic_action_collection,
            R.drawable.ic_action_copy, R.drawable.ic_action_cut, 
            R.drawable.ic_action_discard, R.drawable.ic_action_edit,
            R.drawable.ic_action_expand, R.drawable.ic_action_favorite,
            R.drawable.ic_action_forward, R.drawable.ic_action_good,
            R.drawable.ic_action_half_important, R.drawable.ic_action_important,
            R.drawable.ic_action_new, R.drawable.ic_action_next_item, 
            R.drawable.ic_action_not_important, R.drawable.ic_action_overflow,
            R.drawable.ic_action_paste, R.drawable.ic_action_previous_item,
            R.drawable.ic_action_refresh, R.drawable.ic_action_remove, 
            R.drawable.ic_action_search, R.drawable.ic_action_select_all,
            R.drawable.ic_action_settings, R.drawable.ic_action_share,
            R.drawable.ic_action_undo,
            R.drawable.ic_action_accept, R.drawable.ic_action_back,
            R.drawable.ic_action_bad, R.drawable.ic_action_call,
            R.drawable.ic_action_cancel, R.drawable.ic_action_cloud,
            R.drawable.ic_action_collapse, R.drawable.ic_action_collection,
            R.drawable.ic_action_copy, R.drawable.ic_action_cut, 
            R.drawable.ic_action_discard, R.drawable.ic_action_edit,
            R.drawable.ic_action_expand, R.drawable.ic_action_favorite,
            R.drawable.ic_action_forward, R.drawable.ic_action_good,
            R.drawable.ic_action_half_important, R.drawable.ic_action_important,
            R.drawable.ic_action_new, R.drawable.ic_action_next_item 
};
    
    private Context context;
	
    public ImageAdapter(Context context)
    {
    		this.context = context;
    }
    
    @Override
	public int getCount() {
		return this.images.length;
	}

	@Override
	public Object getItem(int position) {
		return this.images[position];
	}

	@Override
	public long getItemId(int position) {
		return 0;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		 ImageView imageView = new ImageView(this.context);
	     imageView.setImageResource(this.images[position]);
	     imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
	     imageView.setLayoutParams(new GridView.LayoutParams(70, 70));
	     imageView.setOnClickListener( new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				
			}
		});
	     return imageView;
	}

}
