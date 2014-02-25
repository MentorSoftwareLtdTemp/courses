package com.mentorsoftwareltd.androidtutorial.notandroid;

import java.util.ArrayList;
import java.util.List;

interface Generic<T,U,W>
{
	public void doSth(T t,U u,W w);
}

interface NoGeneric
{
	public void doSth(Object t,Object u,Object w);
}

class GenericImpl implements Generic<String, Integer, String>
{
	@Override
	public void doSth(String t, Integer u, String w) {
	}
}

class NoGenericImpl implements NoGeneric
{
	@Override
	public void doSth(Object t, Object u, Object w) {
	}
}



