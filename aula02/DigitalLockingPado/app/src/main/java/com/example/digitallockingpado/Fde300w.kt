package com.example.digitallockingpado

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class Fde300w : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fde300w)

        val btn = findViewById<Button>(R.id.button2);

        btn.setOnClickListener(){
            Toast.makeText(this, "Ainda não implementado", Toast.LENGTH_SHORT).show()
            startActivity(Intent(this, MainActivity::class.java));
        }
    }
}