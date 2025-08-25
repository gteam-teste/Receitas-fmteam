export type RecipeType = "Sobremesa" | "Shake";

export interface Recipe {
  id: string;
  tipo: RecipeType;
  nome: string;
  categoria: string | string[];
  adocado_com?: string;
  rendimento: string;
  porcao: string;
  ingredientes: string[];
  preparo: string;
  nutricional: {
    proteina: number;
    carboidrato: number;
    gordura: number;
    kcal: number;
  };
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const recipes: Recipe[] = [
  // Sobremesas
  {
    id: slug("Pão de mel saudável"),
    tipo: "Sobremesa",
    nome: "Pão de mel saudável",
    categoria: "Hipocalórico",
    adocado_com: "Mel",
    rendimento: "8 unidades",
    porcao: "1 unidade (38,5g)",
    ingredientes: [
      "2 ovos",
      "1 colher de sopa de cacau em pó",
      "1 colher de sopa de mel",
      "60g de iogurte natural desnatado",
      "30g de aveia em flocos finos",
      "1 colher de chá de fermento químico",
      "canela a gosto",
      "80g de doce de leite (10g por unidade)"
    ],
    preparo:
      "Misture todos os ingredientes em um refratário e despeje a massa em forma de cupcake untada. Asse a 180ºC por 15 minutos. Corte ao meio, recheie com doce de leite e finalize com canela.",
    nutricional: { proteina: 3.2, carboidrato: 12.4, gordura: 2.4, kcal: 81 }
  },
  {
    id: slug("Panqueca sensação"),
    tipo: "Sobremesa",
    nome: "Panqueca sensação",
    categoria: "Hipercalórico",
    adocado_com: "Chocolate 70%",
    rendimento: "1 panqueca",
    porcao: "1 unidade (144g)",
    ingredientes: [
      "1 ovo",
      "1 colher de sopa de chocolate em pó 70%",
      "1 colher de sopa de farinha de aveia",
      "1 colher de sopa de leite em pó desnatado",
      "1 colher de sopa de chocolate em pó 70% (recheio)",
      "água (para ponto de recheio)",
      "3 morangos"
    ],
    preparo:
      "Misture os ingredientes da massa até obter consistência lisa. Cozinhe dos dois lados em frigideira untada. Para o recheio, misture leite em pó, chocolate e água até ponto de brigadeiro. Monte com morangos.",
    nutricional: { proteina: 7.6, carboidrato: 36.6, gordura: 13.4, kcal: 281 }
  },
  {
    id: slug("Brownie fit"),
    tipo: "Sobremesa",
    nome: "Brownie fit",
    categoria: "Hipercalórico",
    adocado_com: "Mel",
    rendimento: "1 brownie (108g)",
    porcao: "1 unidade (108g)",
    ingredientes: [
      "2 colheres de sopa de aveia em flocos finos",
      "1 colher de sobremesa cheia (10g) de cacau em pó",
      "1 pitada de fermento químico",
      "1 colher de sobremesa de mel",
      "50ml de leite",
      "25g de chocolate 70% (picado)"
    ],
    preparo:
      "Misture aveia, cacau, fermento e mel. Adicione o leite até cobrir. Misture até ficar lisa. Acrescente o chocolate picado. Leve à airfryer a 180ºC por 10–15 minutos.",
    nutricional: { proteina: 6.7, carboidrato: 15.9, gordura: 0.6, kcal: 95 }
  },
  {
    id: slug("Sacolé de iogurte com coco"),
    tipo: "Sobremesa",
    nome: "Sacolé de iogurte com coco",
    categoria: "Hipocalórico",
    adocado_com: "Mel",
    rendimento: "7 unidades (590g)",
    porcao: "1 unidade (84g)",
    ingredientes: [
      "2 xícaras de chá de iogurte natural sem açúcar",
      "1 xícara de chá de coco fresco ralado",
      "2 colheres de sopa de mel"
    ],
    preparo:
      "Bata os ingredientes no liquidificador no modo pulsar — não triture demais o coco. Com um funil, encha saquinhos descartáveis, deixando 5 cm para dar nó. Congele por no mínimo 3 horas.",
    nutricional: { proteina: 3.2, carboidrato: 7.9, gordura: 6.5, kcal: 100 }
  },
  {
    id: slug("Mousse 2 ingredientes"),
    tipo: "Sobremesa",
    nome: "Mousse 2 ingredientes",
    categoria: "Hipocalórico",
    adocado_com: "Adoçante",
    rendimento: "4 porções (195g)",
    porcao: "1 porção (49g)",
    ingredientes: ["3 bananas médias", "75g de chocolate 70%"],
    preparo:
      "Bata as bananas no liquidificador até ficar homogêneo. Derreta o chocolate e adicione à mistura. Bata mais. Coloque em formas de silicone e leve à geladeira por 4 horas.",
    nutricional: { proteina: 1.8, carboidrato: 16.5, gordura: 8.1, kcal: 140 }
  },
  {
    id: slug("Brigadeiro de maracujá"),
    tipo: "Sobremesa",
    nome: "Brigadeiro de maracujá",
    categoria: "Hipercalórico",
    adocado_com: "Adoçante",
    rendimento: "5 unidades (204g)",
    porcao: "1 unidade (41g)",
    ingredientes: [
      "Polpa de 2 maracujás",
      "2 colheres de sopa de adoçante",
      "1 xícara de chá de leite em pó desnatado (90g)",
      "50ml de água"
    ],
    preparo:
      "Bata a polpa e coe. Leve ao fogo médio com adoçante até reduzir. Misture com leite em pó e água e leve à gelar. Modele e empane no leite em pó ou coma de colher.",
    nutricional: { proteina: 17.7, carboidrato: 15.6, gordura: 1.1, kcal: 138 }
  },
  {
    id: slug("Palha italiana proteica"),
    tipo: "Sobremesa",
    nome: "Palha italiana proteica",
    categoria: "Hipocalórico",
    adocado_com: "Whey Protein",
    rendimento: "5 tiras (185g)",
    porcao: "1 tira (37g)",
    ingredientes: [
      "3 scoops de whey protein",
      "2 colheres de sopa cheias de leite em pó desnatado",
      "2 colheres de sopa de cacau em pó",
      "2 xícaras de chá de bolacha de arroz triturada",
      "água (para dar ponto)"
    ],
    preparo:
      "Misture whey, leite em pó e cacau, adicionando água aos poucos até obter ponto de brigadeiro. Acrescente as bolachas trituradas e leve à forma de silicone para gelar. Desenforme, polvilhe leite em pó e corte.",
    nutricional: { proteina: 3.0, carboidrato: 12.6, gordura: 9.7, kcal: 145 }
  },
  {
    id: slug("Rosquinha de fruta"),
    tipo: "Sobremesa",
    nome: "Rosquinha de fruta",
    categoria: "Hipocalórico",
    adocado_com: "Whey Protein",
    rendimento: "4 rosquinhas (200g)",
    porcao: "1 unidade (50g)",
    ingredientes: ["1 maçã ou pêra", "50g de chocolate 70%", "Punhado de castanhas trituradas"],
    preparo:
      "Corte a fruta em rodelas, retire o meio para formar rosquinha. Banhe no chocolate derretido e salpique castanhas. Leve à geladeira até endurecer.",
    nutricional: { proteina: 6.0, carboidrato: 10.3, gordura: 4.3, kcal: 101 }
  },
  {
    id: slug("Bombom de uva"),
    tipo: "Sobremesa",
    nome: "Bombom de uva",
    categoria: "Hipocalórico",
    adocado_com: "Whey Protein",
    rendimento: "6 bombons (254g)",
    porcao: "1 bombom (42g)",
    ingredientes: [
      "6 quadradinhos de chocolate 70% (1 por forminha)",
      "1 scoop de whey protein",
      "2 colheres de sopa de leite em pó desnatado",
      "18 uvas (3 por forminha)"
    ],
    preparo:
      "Derreta os quadradinhos de chocolate em forminhas de silicone no micro-ondas (30 s). Espalhe e leve à geladeira por 20 minutos. Misture whey e leite em pó com água até formar creme. Junte as uvas e distribua nas forminhas. Congele por cerca de 3 horas.",
    nutricional: { proteina: 0.8, carboidrato: 7.4, gordura: 0.2, kcal: 34 }
  },
  {
    id: slug("Churros"),
    tipo: "Sobremesa",
    nome: "Churros",
    categoria: "Hipocalórico",
    adocado_com: "Mel",
    rendimento: "15 unidades (364g)",
    porcao: "1 unidade (24,3g)",
    ingredientes: [
      "⅓ xícara de farinha de arroz",
      "⅓ xícara de farinha de aveia",
      "1 colher de sopa de polvilho doce",
      "150g de batata doce amassada",
      "⅓ xícara + 3 colheres de sopa de leite desnatado",
      "Mistura de canela + açúcar demerara (para polvilhar)"
    ],
    preparo:
      "Misture tudo até formar massa tipo 'massinha'. Modele os churros, coloque em assadeira untada. Asse a 180 °C por 15–20 minutos. Polvilhe com canela+açúcar enquanto ainda quente. Sirva com doce de leite se desejar.",
    nutricional: { proteina: 2.5, carboidrato: 18.2, gordura: 0.8, kcal: 85 }
  },
  {
    id: slug("Pasta de avelã com cacau (Nutella saudável)"),
    tipo: "Sobremesa",
    nome: "Pasta de avelã com cacau (Nutella saudável)",
    categoria: "Hipocalórico",
    adocado_com: "Adoçante",
    rendimento: "10-12 colheres de sopa (314g)",
    porcao: "1 colher de sopa (28,5g)",
    ingredientes: [
      "1½ xícara de avelãs sem casca",
      "5 colheres de sopa de leite desnatado",
      "2 colheres de sobremesa de cacau em pó",
      "2 colheres de sobremesa de mel",
      "Pitada de sal"
    ],
    preparo:
      "Toste as avelãs no forno a 180 °C por 15 minutos. Processar até virar pasta. Adicione sal, leite, mel e cacau e processe até ficar homogêneo. Armazene em pote de vidro gelado.",
    nutricional: { proteina: 3.4, carboidrato: 5.5, gordura: 12.2, kcal: 140 }
  },
  {
    id: slug("Doce de abóbora light"),
    tipo: "Sobremesa",
    nome: "Doce de abóbora light",
    categoria: ["Hipocalórico", "Vegano", "Sem lactose"],
    adocado_com: "Fruta",
    rendimento: "6 porções (1575g)",
    porcao: "262,5g",
    ingredientes: [
      "Abóbora-moranga em pedaços",
      "½ xícara de adoçante em pó para forno e fogão",
      "1 pedaço de canela em rama (mais para decorar)"
    ],
    preparo:
      "Cozinhe abóbora, adoçante e 1 xícara de água por 45 minutos ou até desmanchar. Sirva frio com canela em rama.",
    nutricional: { proteina: 3.4, carboidrato: 21.0, gordura: 0.3, kcal: 88 }
  },
  {
    id: slug("Danoninho saudável"),
    tipo: "Sobremesa",
    nome: "Danoninho saudável",
    categoria: ["Hipercalórico", "Vegano", "Sem lactose"],
    adocado_com: "Fruta",
    rendimento: "3 porções (398g)",
    porcao: "133g",
    ingredientes: ["200g de morango", "2 inhames cozidos", "½ banana (ou mais para mais doce)"],
    preparo:
      "Cozinhe o inhame por 15 minutos e escorra. Bata morango, banana e água no liquidificador por 3 minutos. Adicione o inhame e bata por mais 3 minutos. Leve à geladeira por 2–3 horas ou até o dia seguinte.",
    nutricional: { proteina: 33.5, carboidrato: 36.7, gordura: 1.6, kcal: 288 }
  },
  {
    id: slug("Sorvete de morango com banana proteico"),
    tipo: "Sobremesa",
    nome: "Sorvete de morango com banana proteico",
    categoria: "Hipercalórico",
    adocado_com: "Whey Protein",
    rendimento: "1 porção (390g)",
    porcao: "1 porção (390g)",
    ingredientes: [
      "1 banana média (40g)",
      "10 morangos médios (120g)",
      "1 scoop de whey protein (30g) sabor morango ou baunilha",
      "200g de iogurte natural"
    ],
    preparo:
      "Bata frutas, whey e iogurte no liquidificador. Transfira para pote e congele até atingir consistência desejada.",
    nutricional: { proteina: 12.2, carboidrato: 23.6, gordura: 15.6, kcal: 270 }
  },
  {
    id: slug("Cookie de microondas"),
    tipo: "Sobremesa",
    nome: "Cookie de microondas",
    categoria: "Hipercalórico",
    adocado_com: "Chocolate 70%, Adoçante",
    rendimento: "1 cookie (94g)",
    porcao: "1 cookie (94g)",
    ingredientes: [
      "1 clara",
      "1 colher de sopa cheia de farinha de aveia",
      "1 colher de sopa de pasta de amendoim",
      "1 colher de sopa de leite desnatado",
      "Punhado de chocolate 70% (em gotas ou picado)",
      "Adoçante a gosto"
    ],
    preparo:
      "Misture todos os ingredientes. Leve ao micro-ondas por 45s a 1 minuto e está pronto!",
    nutricional: { proteina: 4.9, carboidrato: 12.6, gordura: 3.4, kcal: 100 }
  },
  {
    id: slug("Torta de iogurte"),
    tipo: "Sobremesa",
    nome: "Torta de iogurte",
    categoria: "Hipocalórico",
    adocado_com: "Fruta",
    rendimento: "5 fatias (495g)",
    porcao: "1 fatia (99g)",
    ingredientes: [
      "340g de iogurte natural",
      "2 ovos",
      "25g de amido de milho",
      "30g de mel ou adoçante",
      "Geleia de frutas zero açúcar (para finalizar)"
    ],
    preparo:
      "Bata todos os ingredientes, asse a 180 °C por 25 minutos. Espere esfriar para desenformar e finalize com geleia.",
    nutricional: { proteina: 4.2, carboidrato: 23.5, gordura: 0.4, kcal: 110 }
  },
  {
    id: slug("Sorvete de uva"),
    tipo: "Sobremesa",
    nome: "Sorvete de uva",
    categoria: "Hipocalórico",
    adocado_com: "Adoçante",
    rendimento: "3 porções (430g)",
    porcao: "143g",
    ingredientes: ["400g de uva sem semente congelada", "3 colheres de sopa de leite em pó desnatado"],
    preparo:
      "Bata a uva congelada no processador ou liquidificador, adicione leite em pó e misture mais.",
    nutricional: { proteina: 3.2, carboidrato: 21.4, gordura: 0.8, kcal: 102 }
  },
  {
    id: slug("Suspiro"),
    tipo: "Sobremesa",
    nome: "Suspiro",
    categoria: "Sem lactose",
    adocado_com: "Fruta, Adoçante",
    rendimento: "36 unidades (1 porção = 10 unidades)",
    porcao: "10 suspiros",
    ingredientes: [
      "3 claras de ovo",
      "80g de xilitol ou outro adoçante",
      "Aromas opcionais: baunilha, limão, cacau, etc."
    ],
    preparo:
      "Bata as claras em velocidade média, adicione o adoçante aos poucos, acrescente aroma. Bata até firme como chantilly. Modele com saco de confeitar ou colher e asse a 180 °C por 30–40 minutos.",
    nutricional: { proteina: 2.6, carboidrato: 20.0, gordura: 0.0, kcal: 90 }
  },
  {
    id: slug("Fini saudável"),
    tipo: "Sobremesa",
    nome: "Fini saudável",
    categoria: ["Hipocalórico", "Sem lactose"],
    adocado_com: "Adoçante",
    rendimento: "6 unidades (282g)",
    porcao: "1 unidade (47g)",
    ingredientes: [
      "2 mexericas médias (sem sementes)",
      "1 pacote de gelatina incolor",
      "½ copo de água (100ml)",
      "Adoçante opcional"
    ],
    preparo:
      "Hidrate a gelatina, retire as sementes da mexerica, bata no liquidificador e coe. Coloque em forminhas e leve à geladeira por 3 horas ou até endurecer.",
    nutricional: { proteina: 2.1, carboidrato: 6.7, gordura: 0.0, kcal: 33 }
  },
  {
    id: slug("Manjar de coco"),
    tipo: "Sobremesa",
    nome: "Manjar de coco",
    categoria: ["Hipercalórico", "Vegano", "Sem lactose"],
    adocado_com: "Adoçante",
    rendimento: "5 pedaços (1625g)",
    porcao: "1 pedaço (325g)",
    ingredientes: [
      "1 L de leite de amêndoas",
      "200 ml de leite de coco",
      "1 xícara de amido de milho",
      "¾ xícara de adoçante",
      "½ xícara de coco ralado",
      "Para calda: 1 xícara de ameixa seca + 1 xícara de água"
    ],
    preparo:
      "Misture os leites, amido e adoçante e cozinhe em fogo baixo até engrossar. Desligue e misture o coco ralado. Transfira para forma e leve à geladeira por no mínimo 2 horas. Para a calda, ferva ameixa e água. Desenforme e despeje a calda sobre o manjar.",
    nutricional: { proteina: 2.5, carboidrato: 14.6, gordura: 9.8, kcal: 151 }
  },
  {
    id: slug("Tablete de chocolate com granola"),
    tipo: "Sobremesa",
    nome: "Tablete de chocolate com granola",
    categoria: "Hipercalórico",
    adocado_com: "Chocolate 70%",
    rendimento: "5 porções (144g)",
    porcao: "1 unidade (29g)",
    ingredientes: ["1 barra de chocolate 70% cacau", "4 colheres de sopa cheias de granola"],
    preparo:
      "Derreta o chocolate no micro-ondas (em intervalos de 30s). Misture com granola e espalhe em forma. Leve ao congelador e corte em tabletes quando endurecer.",
    nutricional: { proteina: 1.0, carboidrato: 7.7, gordura: 5.2, kcal: 78 }
  },
  {
    id: slug("Surpresa de uva"),
    tipo: "Sobremesa",
    nome: "Surpresa de uva",
    categoria: "Hipercalórico",
    adocado_com: "Chocolate 70%",
    rendimento: "5 porções (140g)",
    porcao: "1 unidade (28g)",
    ingredientes: ["10 uvas", "50g de chocolate 70% cacau (~6 quadradinhos)"],
    preparo:
      "Derreta o chocolate por 30s no micro-ondas. Higienize as uvas e seque. Banhe cada uva e leve ao congelador.",
    nutricional: { proteina: 29.8, carboidrato: 23.5, gordura: 12.9, kcal: 322 }
  },
  {
    id: slug("Bombom gelado"),
    tipo: "Sobremesa",
    nome: "Bombom gelado",
    categoria: "Hipercalórico",
    adocado_com: "Whey Protein, Mel",
    rendimento: "1 unidade (70g)",
    porcao: "1 unidade (70g)",
    ingredientes: [
      "1 scoop de whey (coco ou sua preferência)",
      "1 colher de sopa de leite em pó desnatado",
      "Água (para dar ponto)",
      "3 quadradinhos de chocolate meio amargo"
    ],
    preparo:
      "Misture whey, leite em pó e água até formar creme. Derreta o chocolate por 30s no micro-ondas. Coloque o creme em forma de silicone, cubra com chocolate derretido e leve ao congelador.",
    nutricional: { proteina: 7.5, carboidrato: 22.4, gordura: 14.7, kcal: 236 }
  },
  {
    id: slug("Docinho saudável"),
    tipo: "Sobremesa",
    nome: "Docinho saudável",
    categoria: "Hipercalórico",
    adocado_com: "Fruta",
    rendimento: "6 porções (300g)",
    porcao: "1 docinho (50g)",
    ingredientes: [
      "½ xícara de pasta de amendoim",
      "¼ xícara de mel",
      "¼ xícara de cacau em pó",
      "¼ xícara de chia",
      "¼ xícara de farelo ou farinha de aveia",
      "1 colher de sopa de óleo de coco ou manteiga",
      "Pitada de sal"
    ],
    preparo:
      "Bata tudo no processador até ficar homogêneo. Forme bolinhas e leve à geladeira por 15 minutos.",
    nutricional: { proteina: 3.6, carboidrato: 11.2, gordura: 6.5, kcal: 112 }
  },
  {
    id: slug("Sorvete de banana"),
    tipo: "Sobremesa",
    nome: "Sorvete de banana",
    categoria: "Hipocalórico",
    adocado_com: "Fruta",
    rendimento: "5 porções (227g)",
    porcao: "45g",
    ingredientes: [
      "4 bananas maduras congeladas",
      "3 colheres de sopa cheias de pasta de amendoim",
      "1 colher de sopa de amendoim"
    ],
    preparo:
      "Triture o amendoim. Bata bananas congeladas, pasta de amendoim e amendoim triturado até obter textura. Leve ao congelador por 15 minutos e sirva.",
    nutricional: { proteina: 6.3, carboidrato: 11.5, gordura: 16.8, kcal: 210 }
  },
  {
    id: slug("Fudge de chocolate e amendoim"),
    tipo: "Sobremesa",
    nome: "Fudge de chocolate e amendoim",
    categoria: "Hipercalórico",
    adocado_com: "Chocolate 70%",
    rendimento: "6 porções (214g)",
    porcao: "36g",
    ingredientes: [
      "½ xícara de chocolate 70% cacau",
      "½ xícara de pasta de amendoim",
      "Coberturas opcionais: flor de sal, castanhas, pedaços de amendoim ou amêndoas"
    ],
    preparo:
      "Derreta o chocolate por 30s (ou mais se necessário), misture com pasta de amendoim. Coloque em forma forrada ou de silicone, adicione coberturas e leve ao freezer. Corte e armazene congelado.",
    nutricional: { proteina: 5.2, carboidrato: 10.4, gordura: 12.8, kcal: 180 }
  },

  // Shakes
  {
    id: slug("Shake de Framboesa com Iogurte"),
    tipo: "Shake",
    nome: "Shake de Framboesa com Iogurte",
    categoria: "Hiperproteico",
    rendimento: "1 porção",
    porcao: "1 porção",
    ingredientes: [
      "½ xícara de framboesas frescas ou congeladas",
      "1 potinho de iogurte grego natural sem açúcar (100g)",
      "½ banana madura",
      "½ colher de sopa de mel (opcional)",
      "1 colher de chá de sementes de chia (4g)",
      "2 colheres de sopa de leite em pó (20g)",
      "Gelo (opcional)"
    ],
    preparo:
      "Bata todos os ingredientes no liquidificador até obter uma mistura homogênea e cremosa. Ajuste a doçura com mel, se desejar. Sirva gelado.",
    nutricional: { proteina: 29.17, carboidrato: 24.05, gordura: 2.49, kcal: 234.29 }
  },
  {
    id: slug("Shake de Maracujá"),
    tipo: "Shake",
    nome: "Shake de Maracujá",
    categoria: "Hiperproteico",
    rendimento: "1 porção",
    porcao: "1 porção",
    ingredientes: [
      "300ml de água",
      "1 polpa de maracujá (100g)",
      "1 scoop de whey (30g) - sabor chocolate branco",
      "2 colheres de sopa de leite em pó (20g)",
      "Gelo a gosto",
      "Adoçante a gosto"
    ],
    preparo:
      "Bata tudo no liquidificador até obter uma textura cremosa e homogênea. Ajuste a doçura com adoçante, se preferir. Sirva gelado.",
    nutricional: { proteina: 22.43, carboidrato: 24.98, gordura: 7.06, kcal: 242.92 }
  },
  {
    id: slug("Shake de Abacaxi, Hortelã & Linhaça"),
    tipo: "Shake",
    nome: "Shake de Abacaxi, Hortelã & Linhaça",
    categoria: ["Vegano", "Sem lactose"],
    rendimento: "1 porção",
    porcao: "1 porção",
    ingredientes: [
      "½ xícara de abacaxi fresco em pedaços",
      "½ banana madura",
      "½ copo de leite de amêndoas (100g)",
      "2 colheres de chá de sementes de linhaça",
      "Folhas frescas de hortelã a gosto",
      "1 scoop de proteína vegana sabor baunilha (30g)",
      "Gelo a gosto"
    ],
    preparo:
      "Bata todos os ingredientes no liquidificador até obter um shake cremoso. Ajuste a doçura com mel ou adoçante, se preferir. Sirva gelado.",
    nutricional: { proteina: 18.0, carboidrato: 22.0, gordura: 6.0, kcal: 220 }
  },
  {
    id: slug("Shake de Morangos e Baunilha"),
    tipo: "Shake",
    nome: "Shake de Morangos e Baunilha",
    categoria: ["Hiperproteico", "Vegano", "Sem lactose"],
    rendimento: "1 porção",
    porcao: "1 porção",
    ingredientes: [
      "½ xícara de morangos frescos picados",
      "½ banana madura",
      "1 colher de chá de extrato de baunilha",
      "1 scoop de proteína vegana sabor morango ou baunilha",
      "200ml de leite de amêndoas",
      "Gelo a gosto"
    ],
    preparo:
      "Bata todos os ingredientes no liquidificador até obter uma mistura cremosa. Ajuste a consistência adicionando mais leite, se necessário.",
    nutricional: { proteina: 22.47, carboidrato: 21.62, gordura: 6.99, kcal: 240.88 }
  },
  {
    id: slug("Shake de Banana, Café & Amêndoas"),
    tipo: "Shake",
    nome: "Shake de Banana, Café & Amêndoas",
    categoria: ["Hiperproteico", "Hipercalórico"],
    rendimento: "1 porção",
    porcao: "1 porção",
    ingredientes: [
      "1 banana madura",
      "½ xícara de café preparado e resfriado",
      "½ copo de leite de amêndoas",
      "1 scoop de whey (30g) - sabor chocolate, banana ou neutro",
      "Gelo a gosto"
    ],
    preparo:
      "Bata todos os ingredientes no liquidificador até obter uma textura cremosa. Ajuste a consistência com mais leite, se desejar.",
    nutricional: { proteina: 23.43, carboidrato: 24.48, gordura: 24.19, kcal: 387.74 }
  },
  {
    id: slug("Shake de Abacaxi e Coco"),
    tipo: "Shake",
    nome: "Shake de Abacaxi e Coco",
    categoria: "Hiperproteico",
    rendimento: "1 porção",
    porcao: "1 porção",
    ingredientes: [
      "½ xícara de abacaxi fresco (50g)",
      "½ banana madura",
      "½ xícara de leite de coco (100ml)",
      "1 scoop de whey (30g) - sabor baunilha, coco ou chocolate branco",
      "1 colher de sopa de coco ralado (opcional)",
      "Gelo a gosto"
    ],
    preparo:
      "Bata todos os ingredientes até obter uma mistura cremosa. Ajuste com mais leite de coco se necessário. Sirva gelado.",
    nutricional: { proteina: 17.83, carboidrato: 69.7, gordura: 10.94, kcal: 440.25 }
  },
  {
    id: slug("Shake de Maçã, Aveia & Canela"),
    tipo: "Shake",
    nome: "Shake de Maçã, Aveia & Canela",
    categoria: ["Hiperproteico", "Hipercalórico"],
    rendimento: "1 porção",
    porcao: "1 porção",
    ingredientes: [
      "1 maçã média picada",
      "⅓ xícara de aveia em flocos",
      "½ banana madura",
      "½ xícara de iogurte grego natural (100g)",
      "2 colheres de sopa de leite em pó (20g)",
      "1 copo de água (200ml)",
      "½ colher de chá de canela em pó",
      "Gelo a gosto"
    ],
    preparo:
      "Bata todos os ingredientes no liquidificador até obter uma mistura cremosa. Ajuste com mais leite, se necessário.",
    nutricional: { proteina: 20.0, carboidrato: 35.0, gordura: 6.0, kcal: 300 }
  }
];

export const categories = [
  "Todos",
  "Hipocalórico",
  "Hipercalórico",
  "Hiperproteico",
  "Sem lactose",
  "Vegano"
];

export const types = ["Todos", "Sobremesa", "Shake"] as const;

export const sweeteners = [
  "Todos",
  "Mel",
  "Chocolate 70%",
  "Adoçante",
  "Whey Protein",
  "Fruta"
];