FROM drupal:10
#RUN mkdir -p /var/db && chown -R www-data:www-data /var/db
RUN composer require drupal/gin_toolbar:^1.0@rc drupal/gin:^3.0@rc
COPY --chown=www-data:www-data sites web/sites