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
        $path = __DIR__ . '/var/html/article/' . $id;

        if (!file_exists($path)) {
            throw new \Exception('Article ' . $id . ' does not exist.');
        }

        $text = file_get_contents($path);

        if ($text === false) {
            throw new \Exception('Error retrieving article ' . $id);
        }

        return new Article($id, $text);
    }
}
