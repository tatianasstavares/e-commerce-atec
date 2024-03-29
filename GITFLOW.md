# Padrão de versionamento (Git Flow)

    O projeto contará com o versionamento de código baseado no padrão git flow, em que os developers trabalharão nas suas branches, após finalizar a feature, será feito um pull request para que o team lead faça review e então merge para a branch develop, e periodicamente para a master.

 1. Criar a branch para iniciar uma nova feature:

    - Entrar na branch develop, pois é a partir dela que serão criadas as branches relativas as features:
      - `git checkout develop` 
    - Após se certificar que já está na branch develop, criamos a branch com o nome da feature: 
      -  `git branch <nome-da-branch>`

2. Padrão a ser utilizado nas branches:

   - `feat/<descrição-da-branch> `  (utilizado para novas tarefa)
   - `fix/<descrição-da-branch> `   (utilizado para corrigir bugs)

3. Padrão a ser utilizado nos commits:
    - `feat: <descrição do commit>`
    - `fix: <descrição do commit>`

> Sempre observar se está a trabalhar na branch correta. Ao criar uma nova branch sempre fazer 
> checkout para a brnach develop para aque a branch nova seja criada a aprtir da develop, e 
>  após a criação, fazer checkout para a a branch criada.


4. Enviar a branch para o repositório remoto:
    - `git push origin <nome-da-branch>`
5. Enviar a branch para pull request:


    ![Fluxo Pull request](./assets/pull-request.png)
    1. Ir na aba pull request;
    2. Ir no botão create pull request;
    3. Verificar qual branch será enviada para a develop;
    4. Selecionar a develop (Muito crítico, nunca enviar para a master);


6. Puxar as atualizações para o repositório local


    Caso se inicie uma nova branch, se faz necessário atualizar seu repositório local com as atualizações da develop, portanto:
    - Fazer checkout para a develop, e se certificar que já está na mesma:
        - `git checkout develop`
    - "Puxar" as atualizações:
        - `git pull `

7. Merge (Team leader)
    - Verificar as mudanças ocorridas e enviadas pelos developers;
    - Caso esteja tudo correto, fazer o merge pull request
    - Periodicamente fazer o merge da develop para a master, e criar a tag com a versão.




