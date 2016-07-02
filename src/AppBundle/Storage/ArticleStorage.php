<?php

namespace AppBundle\Storage;

use AppBundle\Entity\Article as Article;

class ArticleStorage
{

    /**
     * Gets an article by it's id.
     *
     * @param string $id
     *   An article id.
     *
     * @return Article
     */
    public function get($id)
    {
        // @TODO move the storage path into configuration.
        $path = __DIR__ . '/../../../var/storage/article/' . $id . '.html';

        if (!file_exists($path)) {
            throw new \Exception('Article ' . $id . ' does not exist.');
        }

        $text = file_get_contents($path);

        if ($text === false) {
            throw new \Exception('Error retrieving article ' . $id);
        }

        return new Article($id, $text);
    }

    /**
     * Saves an article.
     *
     * @param Article $article
     *   An article.
     *
     * @return Article
     */
    public function save(Article $article)
    {
        // @TODO move the storage path into configuration.
        $path = __DIR__ . '/../../../var/storage/article/' . $article->getId() . '.html';

        if (file_put_contents($path, $article->getText()) === false) {
            throw new \Exception('Error saving article ' . $id);
        }

        return $article;
    }
}
