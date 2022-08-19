package com.example.helloworld

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val editNome = findViewById<EditText>(R.id.editNome);
        val txtMensagem = findViewById<TextView>(R.id.txtMensagem);
        val btnOk = findViewById<Button>(R.id.btnOk);
        
        btnOk.setOnClickListener(){
            if(editNome.text.isEmpty()){
                txtMensagem.setText("Por favor, informe seu nome!!!")
            }else {
                txtMensagem.setText("Olá " + editNome.text.trim() + ", seja bem-vindo(a) ao mundo Mobile!!!")
            }
        }
        
    }
}