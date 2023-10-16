const { Sequelize, DataTypes } = require(`sequelize`);
const config = require(`./config/config`);
const ProdutoModel = require(`./models/produto`);
const sequelize = new Sequelize(config.development);
const Produto = ProdutoModel(sequelize, DataTypes);
async function fun() {
    try {
        //Criação de um produto
        const produto = await Produto.create({
            nome: `TRADICIONAL`,
            preco: 25.00,
            descricao: `PÃO TRADICIONAL À MODA DO JEFF`
        });
        console.log(`Produto criado:`, produtoCriado.toJSON());

        //Leitura de produtos
        const produtos = await Produto.findAll();
        console.log(`Produtos cadastrados:`, produtos.map(p => p.toJSON()));

        //Atualização de um produto
        const produtoAtualizado = await Produto.update(
            { preco: 25.00 },
            { where: { id: produtoCriado.id } }
        );
        console.log(`Produto atualizado:`, produtoAtualizado[0] > 0 ? `Atualizado com sucesso` : `Produto não encontrado`);

        //Remoção de um produto
        const produtoRemovido = await Produto.destroy({ where: { id: produtoCriado.id } });
        console.log(`Produto removido:`, produtoRemovido > 0 ? `Removido com sucesso` : `Produto não encontrado`);
    } catch (error) {
        console.error(`Erro:`, error.message);
    } finally {
        // Fechar a conexão com o banco de dados ao final do script
        await Produto.sequelize.close();
    }
}
run();