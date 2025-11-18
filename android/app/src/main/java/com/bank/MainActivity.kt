package com.bank

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import androidx.fragment.app.FragmentActivity
import com.swmansion.rnscreens.fragment.restoration.RNScreensFragmentFactory;

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String = "bank"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onCreate(savedInstanceState: Bundle?) {
        supportFragmentManager.fragmentFactory = RNScreensFragmentFactory()
        super.onCreate(savedInstanceState)
    }
}