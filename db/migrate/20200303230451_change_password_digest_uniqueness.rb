class ChangePasswordDigestUniqueness < ActiveRecord::Migration[5.2]
  def change
   remove_index "users", name: "index_users_on_email_and_password_digest"
  end
end
