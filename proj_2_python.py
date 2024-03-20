# A abordagem mais simples para esse problema é construir uma função. Assim, faremos:

# Definindo uma função baseado nas variáveis vitorias e derrotas
def calculadora_ranked(vitorias, derrotas):

	# Calculando o saldo de vitórias, o parâmetro para classificação
    saldo_vitorias = vitorias - derrotas
	
	# Estrutura de decisão para classificar o saldo em um nível
    if saldo_vitorias < 10:
        nivel = 'Ferro'
    elif 10 <= saldo_vitorias <= 20:
        nivel = 'Bronze'
    elif 21 <= saldo_vitorias <= 50:
        nivel = 'Prata'
    elif 51 <= saldo_vitorias <= 80:
        nivel = 'Ouro'
    elif 81 <= saldo_vitorias <= 90:
        nivel = 'Diamante'
    elif 91 <= saldo_vitorias <= 100:
        nivel = 'Lendário'
    else:
        nivel = 'Imortal'

    # Retornando o saldo e o nível do herói
    return saldo_vitorias, nivel

# Solicitando a entrada de dados para o usuário
vitorias = int(input("Por favor, digite o número de vitórias: "))
derrotas = int(input("Por favor, digite o número de derrotas: "))

# Chamando a função
saldo_vitorias, nivel = calculadora_ranked(vitorias, derrotas)

# Imprimindo a saída
print(f'O Herói tem de saldo de {saldo_vitorias} e está no nível de {nivel}')