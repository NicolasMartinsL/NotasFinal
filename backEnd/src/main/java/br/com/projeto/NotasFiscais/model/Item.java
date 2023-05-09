package br.com.projeto.NotasFiscais.model;

import java.math.BigDecimal;
import javax.persistence.*;

@Entity
@Table(name = "tb_item")
public class Item {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer id;


	@ManyToOne
	public Nota nota;


	public Integer numero;

	@ManyToOne
	public Produto produto;

	public	BigDecimal quantidade;

	public BigDecimal valor;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getNumero() {
		return numero;
	}
	public void setNumero(Integer numero) {
		this.numero = numero;
	}
	public Produto getProdutos() {
		return produto;
	}
	public void setProdutos(Produto produtos) {
		this.produto = produtos;
	}
	public BigDecimal getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(BigDecimal quantidade) {
		this.quantidade = quantidade;
	}
	public BigDecimal getValor() {
		return valor;
	}
	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}


	public Nota getNotas() {
		return nota;
	}

	public void setNotas(Nota notas) {
		this.nota = notas;
	}
}
