FROM drupal:10
VOLUME /var/www/html/sites
RUN composer require drupal/gin_toolbar:^1.0@rc drupal/gin:^3.0@rc
COPY theme web/themes/custom/theme