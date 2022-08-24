package com.example.calculadoraimc

import android.os.Bundle
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val idade = findViewById<EditText>(R.id.IdadeID);
        val altura = findViewById<EditText>(R.id.AlturaID);
        val peso = findViewById<EditText>(R.id.PesoID);

        val homem = findViewById<CheckBox>(R.id.HomemID);
        val mulher = findViewById<CheckBox>(R.id.MulherID);

        val resultado = findViewById<TextView>(R.id.ResultadoID);

        val buttonEnviar = findViewById<Button>(R.id.buttonEnviar);
        val buttonLimpar = findViewById<Button>(R.id.buttonLimpar);

        homem.setOnClickListener(){
            if(mulher.isChecked){
                mulher.setChecked(false);
            }
        }

        mulher.setOnClickListener(){
            if(homem.isChecked){
                homem.setChecked(false);
            }
        }

        buttonEnviar.setOnClickListener(){
            if(idade.text.isEmpty() && altura.text.isEmpty() && peso.text.isEmpty()){
                resultado.setText("Por favor, informe os campos corretamente");
            }else {

                val idadeContent =  idade.text.toString().toInt();
                var alturaContent =  altura.text.toString().toDouble();
                val pesoContent =  peso.text.toString().toDouble();

                if(alturaContent > 2.5){
                    alturaContent = alturaContent/100;
                }

//                if(homem.isChecked){
//                    if(idadeContent>=)
//
//                }

                val resultadoContent = pesoContent / (alturaContent * alturaContent);

                resultado.setText("IMC = " + String.format("%.2f", resultadoContent));

            }

        }

        buttonLimpar.setOnClickListener(){
            resultado.setText("");
            idade.setText("");
            altura.setText("");
            peso.setText("");
            peso.setText("");
            homem.setChecked(false);
            mulher.setChecked(false);
        }

    }
}