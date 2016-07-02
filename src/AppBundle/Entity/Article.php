<?php

namespace AppBundle\Entity;

class Article
{

    /**
     * The id of the article.
     *
     * @var string
     */
    protected $id;

    /**
     * The text of the article.
     *
     * @var string
     */
    protected $text;

    /**
     * Construct a new Article object.
     *
     * @param string $id
     *   The id of the article.
     * @param string $text
     *   The text of the article.
     */
    public function __construct($id, $text)
    {
        $this->id = $id;
        $this->text = $text;
    }

    /**
     * Gets the id of the article.
     *
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Gets the text of the article.
     *
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }
}
