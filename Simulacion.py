import random

def Lanzar_Moneda(nLanzamientos, probabilidad):
    resultado = []
    for _ in range(nLanzamientos):
        lanzamiento = 1 if random.random() < probabilidad else 0
        resultado.append(lanzamiento)
    return resultado

nLanzamientos = 10
probabilidad = 0.5

resultado = Lanzar_Moneda(nLanzamientos, probabilidad)
print(f"Resultado de los lanzamientos: {resultado}")
print(f"Número de caras: {sum(resultado)}")