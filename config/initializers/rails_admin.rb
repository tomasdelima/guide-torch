RailsAdmin.config do |config|
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  ### Models ###

  config.model 'User' do
    navigation_label 'Configurações'
    label 'Usuário'
    exclude_fields :_id, :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at, :sign_in_count, :current_sign_in_at, :last_sign_in_at, :current_sign_in_ip, :last_sign_in_ip
  end

  config.model 'Document' do
    navigation_label 'Configurações'
    label 'Documento'
    exclude_fields :_id

    edit do
      field :owner_id do
        view_helper :hidden_field
        label false
        help ""

        default_value do
          bindings[:view]._current_user._id
        end
      end
    end
  end

  config.model 'Author' do
    navigation_label 'Configurações'
    label 'Autor'
    label_plural 'Autores'
    exclude_fields :_id
  end

  config.model 'Category' do
    navigation_label 'Configurações'
    label 'Categoria'
    label_plural 'Categorias'
    exclude_fields :_id
  end

  ### Controllers ###

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
