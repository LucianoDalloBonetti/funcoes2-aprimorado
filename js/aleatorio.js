const nomes = ["Luciano", "Alessandra", "Davi", "Valeria"];


export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}