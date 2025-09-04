# Lista com os dias úteis da semana
dias_uteis = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]

# Loop para percorrer os dias úteis
for dia in dias_uteis:
    print(f"Faltam alguns dias... Hoje é {dia}")

# Mensagem final
print("Finalmente, chegou o fim de semana! 🎉")


# Lista de preços dos itens da compra
lista_de_compras = [12.50, 7.30, 3.99, 15.00, 6.75]

# Variável para armazenar o total
total = 0

# Loop para somar os preços
for preco in lista_de_compras:
    total += preco

# Exibe o total da compra
print(f"O total da sua compra é R$ {total:.2f}")



# Lista de mensagens não lidas
mensagens_nao_lidas = ["Oi!", "Você viu o e-mail?", "Vamos sair hoje?", "Não esqueça da reunião."]

# Enquanto houver mensagens não lidas
while len(mensagens_nao_lidas) > 0:
    # Lê a primeira mensagem
    mensagem = mensagens_nao_lidas.pop(0)
    print(f"Lendo mensagem: {mensagem}")
    print("Respondendo... ✅")

print("Todas as mensagens foram lidas e respondidas! 📱")
# Lista de alunos presentes
lista_presenca = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"]

# Nome que o professor quer verificar
aluno_procurado = "Carlos"

# Verifica se o aluno está na lista
encontrado = False
for aluno in lista_presenca:
    if aluno == aluno_procurado:
        encontrado = True
        print(f"{aluno_procurado} está presente na sala. ✅")
        break

# Se não foi encontrado
if not encontrado:
    print(f"{aluno_procurado} não está na lista de presença. ❌")



# Valor que queremos alcançar
valor_desejado = 100

# Valor economizado por semana
economia_semanal = 10

# Inicializa o total economizado e o contador de semanas
total_economizado = 0
semanas = 0

# Loop enquanto o total economizado for menor que o valor desejado
while total_economizado < valor_desejado:
    semanas += 1
    total_economizado += economia_semanal
    print(f"Semana {semanas}: Total economizado = R$ {total_economizado:.2f}")

# Mensagem final
print(f"\nVocê precisará de {semanas} semanas para juntar R$ {valor_desejado:.2f}. 💰")

# Lista de alunos presentes
lista_presenca = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"]

# Nome que o professor quer verificar
aluno_procurado = "Carlos"

# Verifica se o aluno está na lista
encontrado = False
for aluno in lista_presenca:
    if aluno == aluno_procurado:
        encontrado = True
        print(f"{aluno_procurado} está presente na sala. ✅")
        break

# Se não foi encontrado
if not encontrado:
    print(f"{aluno_procurado} não está na lista de presença. ❌")





